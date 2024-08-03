import { Tab, Table, Tabs } from 'css-materials';

export default function Dashboard() {
    const columns = [
        { key: 'name', label: 'Name' },
        { key: 'age', label: 'Age' },
        { key: 'address', label: 'Address' },
    ];

    const data = [
        { name: 'John Doe', age: 28, address: '1234 Elm St' },
        { name: 'Jane Smith', age: 34, address: '5678 Oak St' },
    ];

    return (
        <div>
            <Tabs>
                <Tab label="Tab 1">
                    <Table columns={columns} data={data} />
                </Tab>
                <Tab label="Tab 2" disabled>
                    Content for Tab 2
                </Tab>
            </Tabs>
        </div>
    );
}