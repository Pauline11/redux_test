/*
 * @Author: pangyue
 * @Date: 2022-10-28
 * @Description: 
 */
import { nanoid } from "nanoid";
import React, { Component } from "react";

export default class Person extends Component {

    add = () => {
        this.props.addPerson({
            id: nanoid(), 
            name: this.name.value,
            age: this.age.value
        })
        console.log(this.name, this.age)
    }

    render(){
        return (
            <div>
                <h1>person组件</h1>
                <input ref={(c) => this.name = c} type='text' placeholder="输入名字"/>
                <input ref={(c) => this.age = c}  type='text' placeholder="输入年龄"/> 
                <button onClick={this.add}>添加</button>
                <ul>
                    {this.props.personObj?.map(item => (
                        <li key={item.id}>名字{item.name}--年龄{item.age}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
