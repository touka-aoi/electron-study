from bokeh.plotting import figure, show
from bokeh.models import DatetimeTickFormatter
from bokeh.models import ColumnDataSource
import sys
import json
import pandas as pd
from bokeh.embed import json_item

data = sys.argv[1]

df = pd.read_csv("./testCode/dummy.csv", index_col=0)
source = ColumnDataSource(data=df)
# tooltips設定
TOOLTIPS = [
    ("index", "$index"),
    ("(x,y)", "(@huga, @fuga)"),
    ("timestamp", "@fuga_TIMESTAMP"),
    ("label", "@label"),
]
p = figure(title="Simple line example", x_axis_label='timestamp', y_axis_label="target", tooltips=TOOLTIPS)
p.circle(x="huga", y="fuga", source=source, legend_label="Objects",
    fill_color="red",
    fill_alpha=0.5,
    line_color="blue",
    size=10)

res = json.dumps(json_item(p, "myplot"))

print(res)