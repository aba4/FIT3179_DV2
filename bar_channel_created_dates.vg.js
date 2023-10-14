{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "https://raw.githubusercontent.com/aba4/FIT3179_DV2/main/cleaned_Youtube_data_1.csv"
  },
  "vconcat": [
    {
      "width": "container",
      "height": 240,
      "mark": "bar",
      "encoding": {
        "x": {
          "field": "full_created_date",
          "type": "temporal",
          "scale": {"domain": {"param": "brush"}},
          "axis": {"title": "", "tickCount": 10}
        },
        "y": {"aggregate": "count", "field": "Title", "type": "quantitative"}
      },
      "transform": [
        {
          "filter": {
            "field": "full_created_date",
            "timeUnit": "year",
            "range": ["2005", "2023"]
          }
        }
      ]
    },
    {
      "width": "container",
      "height": 60,
      "mark": "bar",
      "params": [
        {"name": "brush", "select": {"type": "interval", "encodings": ["x"]}}
      ],
      "encoding": {
        "x": {"field": "full_created_date", "type": "temporal", "axis": {"tickCount": 10}},
        "y": {
          "aggregate": "count",
          "field": "Title",
          "type": "quantitative",
          "axis": {"tickCount": 3, "grid": false}
        }
      },
      "transform": [
        {
          "filter": {
            "field": "full_created_date",
            "timeUnit": "year",
            "range": ["2005", "2023"]
          }
        }
      ]
    }
  ]
}
