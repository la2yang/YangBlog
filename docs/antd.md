### 根据表单项动态展示表单
- 通过shouldUpdate绑定表单项来触发重新渲染
- 再通过getFieldValue获取表单字段来动态渲染表单
```javascript
<Form.Item
  label="代理商签约"
  name="isAgentSignedCustomer"
>
  <Radio.Group>
    <Radio value={0}>否</Radio>
    <Radio value={1}>是</Radio>
  </Radio.Group>
</Form.Item>
<Form.Item
  noStyle
  shouldUpdate={(prevValues, currentValues) =>
    prevValues.isAgentSignedCustomer !== currentValues.isAgentSignedCustomer
  }
>
  {({ getFieldValue }) => {
    const needAgent = getFieldValue('isAgentSignedCustomer') === 1;
    return (
      <Form.Item
        label="代理商"
        name="assignedAgent"
      >
        <Select
          placeholder="请选择代理商"
          options={[
            { label: '张三', value: '张三' },
            { label: '李四', value: '李四' },
          ]}
        />
      </Form.Item>
    );
  }}
</Form.Item>
```