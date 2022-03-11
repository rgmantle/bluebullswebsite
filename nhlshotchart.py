# -*- coding: utf-8 -*-
"""
Created on Tue Nov  9 23:26:53 2021

@author: graig
"""

import requests
import pickle
# Set up the API call variables
game_data = []
year = '2019'
season_type = '02' 
max_game_ID = 1290

# Loop over the counter and format the API call
for i in range(0,max_game_ID):
    r = requests.get(url='http://statsapi.web.nhl.com/api/v1/game/'
        + year + season_type +str(i).zfill(4)+'/feed/live')
    data = r.json()
    game_data.append(data)
    
with open('./'+year+'FullDataset.pkl', 'wb') as f:
    pickle.dump(game_data, f, pickle.HIGHEST_PROTOCOL)   


import numpy as np 
import pandas as pd 
import pickle    
import matplotlib
import matplotlib.pyplot as plt
color_map = plt.cm.winter
from matplotlib.patches import RegularPolygon
import math
from PIL import Image
# Needed for custom colour mapping!
from matplotlib.colors import ListedColormap,LinearSegmentedColormap
import matplotlib.colors as mcolors

c = mcolors.ColorConverter().to_rgb()
positive_cm = ListedColormap([c('#e1e5e5'),c('#d63b36')])
negative_cm = ListedColormap([c('#e1e5e5'),c('#28aee4')]) 

with open('/Users/graig/Documents/GitHub/bluebullsjson/2019FullDataset.pkl', 'rb') as f:
    game_data = pickle.load(f)
    
# Do some dictionary initialisation to hold our cleaned and condensed league data
league_data = {};
league_data['Shot'] = {};
league_data['Shot']['x'] = [];
league_data['Shot']['y'] = [];
league_data['Goal'] = {};
league_data['Goal']['x'] = [];
league_data['Goal']['y'] = [];

# First loop over the elements of game_data. Each one of these is an NHL game and contains all of the game event data.
for data in game_data:
    if 'liveData' not in data:
        continue
   plays = data['liveData']['plays']['allPlays'] 
        for play in plays: 
             for event in event_types:
                if play['result']['event'] in [event]:  
                   if 'x' in play['coordinates']:
                      league_data[event]
                           ['x'].append(play['coordinates']['x'])
                        league_data[event]
                           ['y'].append(play['coordinates']['y'])