# js-react-highlight-text
A Hight light Text React Component

## Support props
| params        | type           | note       |
| ------------- |:-------------|:-------------| 
|normalTextClsName| string | class name for normal text.|  
|highlightTextClsName| string | class name for highlight text. |
|text| string | text this component to display |
|keyword | string | keyword this component to highlight display |
|ignoreCase | boolean | ignore case while doing keyword match |
|highlightAllMatch | boolean | search and highlight all matched keywords, if not specified, only the first matched keywords will matched|

## Usage
![](https://github.com/leeowenowen/js-react-highlight-text/blob/master/wiki-res/highlightText.png?raw=true)

Above shows the display result of this component. Code is as belows

```
.normalText {
  font-size: 12px;
  color:yellow;
}
.highlightText {
  font-size: 18px;
  color: red;
  font-weight: bold;
}
```

```
       <div> 
        Highlight first: &nbsp;
        <HLText
          normalTextClsName="normalText"
          highlightTextClsName="highlightText"
          text="AaBbCAd"
          keyword="a"
        />
        </div>
       <div> 
        Highlight first and ignore case: &nbsp;
        <HLText
          normalTextClsName="normalText"
          highlightTextClsName="highlightText"
          text="AaBbCAd"
          keyword="a"
          ignoreCase
        />
        </div>
       <div> 
        Highlight all and ignore case: &nbsp;
        <HLText
          normalTextClsName="normalText"
          highlightTextClsName="highlightText"
          text="AaBbCAd"
          keyword="a"
          ignoreCase
          highlightAllMatch
        />
        </div>
```

