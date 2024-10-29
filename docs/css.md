### 1. js获取全局样式

```javascript
/**
 * @param cssVariables css变量名数组
 */
export const getStyle = (cssVariables: string[]) => {
  const styleObj = getComputedStyle(document.documentElement);

  return cssVariables.map((variable) =>
    styleObj.getPropertyValue(variable).trim(),
  );
};
```

