#!/bin/bash

# How many saturdays I have left to live: https://www.johnmaxwell.com/blog/dont-lose-your-marbles/
# 3380      - weekends in 65 years of living (65 years * 52 weeks/year)
# 719553600 - birthdate in seconds from epoch
# 604800    - convert seconds to weeks (60 seconds/minute * 60 minutes/hour * 24 hour/day * 7 days/week)
echo "3380 - ($(date +%s) - 719553600) / 604800" | bc