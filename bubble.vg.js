{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Youtube Channels' Video Views vs Subscribers Sized By Yearly Earnings",
  "width": 600,
  "height": 300,
  "data": {
    "url": "https://raw.githubusercontent.com/aba4/FIT3179_DV2/main/cleaned_Youtube_data_1.csv"
  },
  "params": [
    {
    "name": "category_highlight",
    "select": {"type": "point", "fields": ["category_figure_ground"]},
    "bind": "legend"
    },
    {
      "name": "Earnings_Above",
      "value": 0,
      "bind": {
        "input": "range",
        "min": 0,
        "max": 30000000,
        "step": 1000000,
        "name": "Average Yearly Earnings: "
      }
    },
    {
      "name": "category_selection",
      "bind": {
        "input": "select",
        "options": [
          null,
          "Music", 
          "Entertainment", 
          "Education", 
          "Shows", 
          "People & Blogs",
          "Sports", 
          "Film & Animation", 
          "News & Politics", 
          "Gaming",
          "Trailers", 
          "Comedy", 
          "Nonprofits & Activism",
          "Science & Technology", 
          "Movies", 
          "Howto & Style",
          "Pets & Animals", 
          "Autos & Vehicles"
        ],
        "labels": [
          "Show All",
          "Music", 
          "Entertainment", 
          "Education", 
          "Shows", 
          "People & Blogs",
          "Sports", 
          "Film & Animation", 
          "News & Politics", 
          "Gaming",
          "Trailers", 
          "Comedy", 
          "Nonprofits & Activism",
          "Science & Technology", 
          "Movies", 
          "Howto & Style",
          "Pets & Animals", 
          "Autos & Vehicles"
        ],
        "name": "Category Selection: "
      }
    }
  ],
  "transform": [
    {"filter": "datum.subscribers > 0"},
    {"filter": "datum.video_views > 0"},
    {"filter": "datum.rank <= 1000"},
    {"filter": "datum.average_yearly_earnings > Earnings_Above"},
    {
      "filter": "category_selection == null || datum.category == category_selection"
    }
  ],
  "selection": {"category_highlight": {
                "type": "multi",
                "fields": ["category_figure_ground"],
                "bind": "legend"
                }
},

  "layer": [
    {
      "mark": "circle",
      "encoding": {
        "x": {
        "field": "uploads",
        "type": "quantitative",
        "scale":{"domain": [-5000, 320000]},
        "title": "Video views in millions"
        },
        "y": {
          "field": "subscribers_in_millions",
          "type": "quantitative",
          "axis": {"title": "Number of subscribers in millions"}
        },
        "size": {
          "field": "average_yearly_earnings",
          "type": "quantitative",
          "legend": {"format": ".1s", "clipHeight": 30},
          "scale": {"rangeMax": 500},
          "title": "Average yearly earnings"
        },
        "color": {"field": "category_figure_ground", "type": "ordinal","scale":{"domain":["Entertainment", "Music", "People & Blogs", "Other"],"range": ["#FF6B6B","#5A8DAD","#F4C095", "#B2B2B2"]},"title":"Category"
        },
        "opacity": {
          "condition": {"selection": "category_highlight", "value": 0.7},
        "value": 0.1
        },
        "tooltip": [
          {"field": "Title", "type": "nominal", "title": "Channel name"},
          {"field": "category", "type": "nominal", "title": "Category"},
          {"field": "subscribers_in_millions", "type": "quantitative", "format": ",", "title": "Number of subscribers"},
          {"field": "video_view_in_millions", "type": "quantitative", "format": ",", "title": "Number of video views"},
          {"field": "lowest_yearly_earnings_in_millions", "type": "quantitative", "format": ",", "title": "Lowest yearly earnings"},
          {"field": "highest_yearly_earnings_in_millions", "type": "quantitative", "format": ",", "title": "Highest yearly earnings"},
          {"field": "average_yearly_earnings_in_millions", "type": "quantitative", "format": ",", "title": "Average yearly earnings"}
        ]
      }
    }
  ]
}
