import requests
from bs4 import BeautifulSoup
from random import choice
from csv import DictWriter
# from time import sleep # THIS SPACES OUT REQUESTS TO SITE

site = requests.get("https://blog.hubspot.com/sales/16-sales-qualification-questions-to-identify-prospects-worth-pursuing")

def scrape_quotes():
    soup = BeautifulSoup(site.text, "html.parser")
    org_site = "https://blog.hubspot.com/sales/16-sales-qualification-questions-to-identify-prospects-worth-pursuing"
    blocks = soup.find_all("h3")
    real_all_info = []
    for val in blocks:
        real_all_info.append({
            "question": val.find("h3").get_text(),
        })

    count = 1
    while blocks:
        pages = soup.find(class_="pager").find("a")["href"][:6:]
        full_next_url = org_site + pages + str(count)
        count += 1
        response = requests.get(str(full_next_url))
        soup = BeautifulSoup(response.text, "html.parser")
        blocks = soup.find_all("h3")

        for val in blocks:
            real_all_info.append({
                "question": val.find(class_="text").get_text(),
            })
    return real_all_info


def write_quotes(quotes):
    with open("qualqs.csv", "w") as file:
        headers = ["question"]
        csv_writer = DictWriter(file, fieldnames=headers)
        csv_writer.writeheader()
        for quote in quotes:
            csv_writer.writerow(quote)

quotes = scrape_quotes()
write_quotes(quotes)
	