### 数据双向绑定
`value = {value} onChange = {(e) => setValue(e.taget.value)}`

### 组件通信
props：一个对象
基本数据：`props.name`
插槽：`props.children`

**父传子**
原理：利用props，通过子组件触发父组件方法并传递参数实现
``` javascript
function App() {
  function getSonName(name) {
    console.log(name)
  }

  return (
    <div className="App">
      <Son getSonName={getSonName}></Son>
    </div>
  )
}

function Son({ getSonName }) {
  const [name, setName] = useState('Son')
  return (
    <div>
      <button onClick={() => getSonName(name)}>click</button>
    </div>
  )
}
```
**兄弟通信**
原理：利用props，通过共同父组件实现组件通信

**祖孙通信**
1. 通过createContext创建一个上下文对象ctx
     `const ctx = createContext()`
2. 在顶层组件通过ctx.provider组件提供数据
     `<ctx.provider value={name}> ... </ctx.provider>`
3. 在底层组件通过useContext函数获取数据
     `const msg = userContext(ctx)`

### hooks

#### 1. useEffect

> 组件渲染完毕后执行的函数

`useEffect(() => {callback}, [依赖项])`

**清除监听（如定时器）**
```javascript
useEffect(() => {
  const timer = setInterval(() => {}, 1000)
}, return () => {
  // 组件卸载时触发
  clearInterval(timer)
}, [])
```

#### 2. useReduer

> 状态管理

```javascript
function countReducer(state, action) {
    switch (action.type) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        default:
            throw new Error()
    }
}

// dispatch 数据操作
// 0 默认值
const [state, dispatch] = useReducer(countReducer, 0)

```

#### 3.useRef

> 获取dom元素

需要获取子组件实例的方法时

``` javascript
// 接收ref
const Child = forwardRef(function(props, ref) {
    // 暴露方法给父组件
    useImperativeHandle(ref, () => ({
        childFn: () => {
            console.log('子组件')
        }
    }))
    
    return <div>this is child<div/>
})
```

#### 4.useMemo

> 缓存结果，需要返回值，只有依赖数据发生变化时才执行，类似watchEffect
>
> 如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值。

``` javascript
const obj = useMemo(() => {name: 'father'}, [name])
```

#### 5.useCallback

> 父组件重新渲染时，它包含的函数会被重新创建，即使函数未变化，会导致获取此函数的子组件重新渲染
>
> 缓存函数，包裹函数

 ```javascript
  const myFn = useCallback( () => { console.log(father) })
 ```

#### 6.react.memo

> 父组件重新渲染时，子组件即使未变化也会一起重新渲染。
>
> 用memo将组件包裹

```js
1. export default memo(ChildComponent)

2. const child = memo(() => <>Child </>)
```

#### 7.useContext

> 子组件之间共享父组件数据，状态管理

``` js
// 父组件
const Context = createContext(null)
const [num, setNum] = useState(1)

function Father() {
  return <>
    	<Context.Provider value={num}>
    		<Child1/>
        <Child2/>
    	<Context.Provider/>
    </>
}

function Child1() {
  const num = useContext(Context)
  return <>{num}</>
}

function Child2() {
  const num = useContext(Context)
  return <>{num}</>
}
```





