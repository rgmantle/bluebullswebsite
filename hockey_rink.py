# -*- coding: utf-8 -*-
"""
Created on Wed Nov 10 21:17:50 2021

@author: graig
"""

from hockey_rink import NHLRink, IIHFRink, NWHLRink
import matplotlib.pyplot as plt

fig, axs = plt.subplots(1, 3, sharey=True, figsize=(12, 6), gridspec_kw={"width_ratios": [1, 98.4/85, 1]})
nhl_rink = NHLRink(rotation=90)
iihf_rink = IIHFRink(rotation=90)
nwhl_rink = NWHLRink(rotation=90)
axs[0] = nhl_rink.draw(ax=axs[0])
axs[1] = iihf_rink.draw(ax=axs[1])
axs[2] = nwhl_rink.draw(ax=axs[2])

