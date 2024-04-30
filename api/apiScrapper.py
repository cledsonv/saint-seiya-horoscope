import requests
from bs4 import BeautifulSoup
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_horoscope_text(soup, class_name):
    text_element = soup.find('p', class_=class_name)
    if text_element:
        return text_element.get_text(strip=True)
    return ''

def extract_annual_details(soup):
    content = {}
    # Início da página até o primeiro título importante
    introduction = soup.find('div', class_='text-wrapper')
    if introduction:
        intro_text = []
        for p in introduction.find_all('p', recursive=False):
            if p.find('strong'):
                break
            intro_text.append(p.get_text(strip=True))
        content['introduction'] = ' '.join(intro_text)

    # Detalhes específicos para cada seção
    sections = soup.find_all('h2')
    for section in sections:
        title = section.get_text(strip=True)
        section_content = []
        next_node = section.find_next_sibling()
        while next_node and next_node.name != 'h2':
            if next_node.name == 'p' or next_node.name == 'h3':
                section_content.append(next_node.get_text(strip=True))
            next_node = next_node.find_next_sibling()
        content[title] = ' '.join(section_content)

    return content

@app.route('/api/horoscope/<sign>', methods=['GET'])
def get_horoscope(sign):
    urls = {
        'daily': f"https://www.horoscopovirtual.com.br/horoscopo/{sign}",
        'weekly': f"https://www.horoscopovirtual.com.br/horoscopo-semanal/{sign}",
        'monthly': f"https://www.horoscopovirtual.com.br/horoscopo-mensal/{sign}",
        'annual': f"https://www.horoscopovirtual.com.br/artigos/horoscopo-{sign}-2024-previsao-anual"
    }
    
    results = {}
    for period, url in urls.items():
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')
        if period != 'annual':
            results[period] = get_horoscope_text(soup, 'text-pred')
        else:
            results[period] = extract_annual_details(soup)
    
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
