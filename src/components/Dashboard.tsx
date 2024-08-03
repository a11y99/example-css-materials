import { Tab, Table, Tabs, Avatar } from 'css-materials';
import { FaExclamationTriangle } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

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
                    <div className="flex space-x-2.5 items-center mb-5">
                        <Avatar name="オダギリジョー" bgColor='#2fa0ff' size="small" />
                        <h1 className="font-bold">オダギリジョー's Team</h1>
                    </div>
                    <Table columns={columns} data={data} />
                </Tab>
                <Tab label="Tab 2" disabled>
                    Content for Tab 2
                </Tab>
            </Tabs>
        </div>
    );
}