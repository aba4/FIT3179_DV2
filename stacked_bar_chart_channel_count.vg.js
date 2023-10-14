 {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Yearly Distribution of New Channels Created by Category (2005-2022)",
  "width": 600,
  "height": 300,
  "data": {"url": "https://raw.githubusercontent.com/aba4/FIT3179_DV2/main/cleaned_Youtube_data_1.csv"},
  "transform": [{
    "calculate": "if(datum.category_figure_ground === 'Other', 0, if(datum.category_figure_ground === 'Entertainment', 1, if(datum.category_figure_ground === 'Music', 2, if(datum.category_figure_ground === 'People & Blogs', 3, 4))))",
    "as": "categoryOrder"
    },
    {"filter": {"timeUnit": "year", "field": "created_year", "range": ["2004", "2022"]}}],
  "mark": "bar",
  "encoding": {
    "x": {
      "timeUnit": "year",
      "field": "created_year",
      "type": "ordinal",
      "title": null
    },
    
    "y": {
      "aggregate": "count",
      "type": "quantitative"
    },
    "color": {
      "field": "category_figure_ground",
      "type": "nominal",
      "scale": {
        "domain": ["Entertainment", "Music", "People & Blogs", "Other"],
        "range": ["#64A6D1","#EF8E3B","#5FA64D", "#A8A8A8"]
      },
      "title": "Category"
    },
    "order":{"field":"categoryOrder"},
    "tooltip": [
          {"field": "category_figure_ground", "type": "nominal", "title": "Category"},
          {"aggregate": "count", "field": "category_figure_ground", "type": "quantitative", "format": ",", "title": "Number of channels"}
        ]
  }
}
