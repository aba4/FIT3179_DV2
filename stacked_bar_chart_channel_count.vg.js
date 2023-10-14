 {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "https://raw.githubusercontent.com/aba4/FIT3179_DV2/main/cleaned_Youtube_data_1.csv"},
  "transform": [{
    "calculate": "if(datum.category_figure_ground === 'Other', 0, if(datum.category_figure_ground === 'Entertainment', 1, if(datum.category_figure_ground === 'Music', 2, if(datum.category_figure_ground === 'People & Blogs', 3, if(datum.category_figure_ground === 'Games', 4, 5)))))",
    "as": "categoryOrder"
  }],
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
        "domain": ["Entertainment", "Music", "People & Blogs", "Games", "Other"],
        "scheme": "reds"
      },
      "title": "Category"
    },
    "order": {"field": "categoryOrder"}
  }
}
