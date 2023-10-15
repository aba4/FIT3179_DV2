{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 600,
  "data": {
    "url": "https://raw.githubusercontent.com/aba4/FIT3179_DV2/main/ch2_3.csv"
  },
  "vconcat": [
    {
      "width": "container",
      "height": 240,
      "mark": "area",
      "title":"Video Upload Trends: MrBeast vs T-series (2015-2023)",
      "encoding": {
        "x": {
          "field": "publishDate",
          "type": "temporal",
          "scale": {"domain": {"param": "brush"}},
          "axis": {"title": "", "tickCount": 10}
        },
        "y": {"aggregate": "sum", "field": "Count_video_uploads",
        "axis":{"title":"Video uploads"}},
        
        "color": {"field": "series", "scale": {"range": ["#cd6e89", "#5A8DAD"]}, "title":"Channel"},
        "tooltip": [
      {"field": "series", "type": "nominal", "title": "Channel Name"},
      {"aggregate": "sum", "field": "Count_video_uploads", "type": "quantitative", "title": "Number of Uploads"},
      {"timeUnit": "yearmonth", "field": "publishDate", "type": "temporal", "title": "Publish Date", "format": "%Y-%m"}
    ]
      }
    },
    {
      "width": "container",
      "height": 60,
      "mark": "line",
      "params": [
        {"name": "brush", "select": {"type": "interval", "encodings": ["x"]}}
      ],
      "encoding": {
        "x": {"field": "publishDate", "type": "temporal", "axis": {"tickCount": 10, "title":null}},
        "y": {
          "aggregate": "sum", "field": "Count_video_uploads",
          "axis": {"tickCount": 3, "grid": false, "title":null}
        },
        "color": {"field": "series", "scale": {"range": ["#cd6e89", "#5A8DAD"]}, "title":"Channel"}
      }
    }
  ]
}

