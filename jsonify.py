import csv
import re 

with open('new_hotspots.csv') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
    with open('new_spots.json', 'w') as f:
        for row in spamreader:
            f.write('{{ "name" : "{0}", "latitude" : {1}, "longitude" : {2} }},'.format(row[0], re.sub("°", "", row[1]), re.sub("°", "", row[2])))

