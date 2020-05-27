// import 'core-js';
// import 'core-js/features/set';
// import 'core-js/features/map';
// import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Form, Input, Checkbox } from '@alifd/next';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        fixedSpan: 10
    },
    wrapperCol: {
        span: 14
    }
};

class Demo extends React.Component {

    handleSubmit (values) {
        console.log('Get form value:', values);
    }

    render() {
        return (
            <Form style={{width: '60%'}} {...formItemLayout} >
                <FormItem label="baseUsername:">
                    <p>Fixed Name</p>
                </FormItem>
                <FormItem label="password:">
                    <Input htmlType="password" name="basePass" placeholder="Please Enter Password"/>
                </FormItem>
                <FormItem label="Note:" help="something">
                    <Input.TextArea placeholder="something" name="baseRemark" />
                </FormItem>
                <FormItem label="Agreement:">
                    <Checkbox name="baseAgreement" defaultChecked>Agree</Checkbox>
                </FormItem>
                <FormItem label=" ">
                    <Form.Submit onClick={this.handleSubmit}>Confirm</Form.Submit>
                </FormItem>
            </Form>
        );
    }
}

ReactDom.render(<Demo/>, document.getElementById("root"));
