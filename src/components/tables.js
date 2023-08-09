import React from 'react';
import { Table } from 'antd';
import './style.css';
import Graphic from './graphic';

const Tables = () => {
    // Sample data for the tables
    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Description', dataIndex: 'description', key: 'description' },
    ];

    const data = [
        { key: '1', name: 'Task 1', description: 'Description of Task 1' },
        { key: '2', name: 'Task 2', description: 'Description of Task 2' },
    ];

    return (
        <div className="tables-container">
            <div className="top-tables">
                <div className="table-container">
                    <h2>To-do List</h2>
                    <Table columns={columns} dataSource={data} />
                </div>
                <div className="table-container">
                    <h2>Demos</h2>
                    <Table columns={columns} dataSource={data} />
                </div>
                <div className="table-container">
                    <h2>Clones</h2>
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
            <div className="main-project-table">
                <h2>The Main Project</h2>
                <Table columns={columns} dataSource={data} />
            </div>
            <Graphic /> {/* Add this line to include the graphic and contributors list */}
        </div>

    );
};

export default Tables;
