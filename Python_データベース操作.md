
## ダミーデータを作成する

https://www.geeksforgeeks.org/pandas-generating-ranges-of-timestamps-using-python/

https://mujinkp.co.jp/%E3%82%88%E3%81%8F%E5%BF%98%E3%82%8C%E3%82%8B%E3%83%80%E3%83%9F%E3%83%BC%E3%83%87%E3%83%BC%E3%82%BF%E4%BD%9C%E6%88%90%E6%96%B9%E6%B3%95%E3%81%AE%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E9%9B%86/

`datetime.timedelta()`

https://docs.python.org/ja/3/library/datetime.html
timedeltaの引数
```python
delta = timedelta(
...     days=50,
...     seconds=27,
...     microseconds=10,
...     milliseconds=29000,
...     minutes=5,
...     hours=8,
...     weeks=2
... )
```

今日を取得
`pd.Timestamp.today()`

今日にdelta(差分)を足していく
```python
timeList = [today + datetime.timedelta(milliseconds=x) for x in range(n)]
```


データフレームに変換する
`pandas.to_datetime`を使う
エラーの時は`NaT`を入れる
If `'coerce'`, then invalid parsing will be set as `NaT`.

https://pandas.pydata.org/docs/reference/api/pandas.to_datetime.html


正規表現でデータフレームを取得する
```python
data.filter(regex='TIMESTAMP$', axis=1)
```
https://note.nkmk.me/python-pandas-index-columns-select/

最小のサンプリング数を取得する
```python 
data.filter(regex='TIMESTAMP$', axis=1).applymap(lambda x: x if pd.isna(x) else x[:-ef]).apply(lambda x: pd.to_datetime(x)).diff().min().min()
```
列名取得
https://note.nkmk.me/python-pandas-idxmax-idxmin/


あほやん

nan判定
https://kagglenote.com/misc/pandas_nan_judge/

