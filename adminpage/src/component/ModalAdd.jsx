import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
// import "../css/Toggle.css"

const AddUserModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    Name: '',
    Company: '',
    Ordervalue: '',
    date: '',
    avatar: '',
    status: 'new'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (e) => {
    const date = e.value;
    const formatted = date.toISOString().split('T')[0];
    setFormData((prev) => ({ ...prev, date: formatted }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://67cd2e68dd7651e464ed8f46.mockapi.io/api/v1/id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Thêm mới thất bại');

      const newUser = await response.json();
      onAdd(newUser); 
      onClose();
    } catch (error) {
      console.error(error);
      alert('Lỗi khi thêm người dùng!');
    }
  };

  const footer = (
    <div className="flex justify-end gap-2 p-2 text-white font-medium">
      <Button label="Cancel" icon="pi pi-times"  onClick={onClose} />
      <Button label="Add" icon="pi pi-plus"  onClick={handleSubmit} />
    </div>
  );

  return (
    <Dialog
      header="Add New Customer"
      visible={isOpen}
      style={{ width: '30vw' }}
      modal
      className="p-fluid bg-white shadow-2xl rounded-lg p-3"
      onHide={onClose}
      footer={footer}
    >
      <div className="flex flex-col gap-3">
        <div>
          <label className="block mb-1">Name</label>
          <InputText name="Name" value={formData.Name} onChange={handleChange} />
        </div>

        <div>
          <label className="block mb-1">Company</label>
          <InputText name="Company" value={formData.Company} onChange={handleChange}/>
        </div>

        <div>
          <label className="block mb-1">Order Value</label>
          <InputText name="Ordervalue" value={formData.Ordervalue} onChange={handleChange} />
        </div>

        <div>
          <label className="block mb-1">Order Date</label>
          <Calendar
            value={formData.date ? new Date(formData.date) : null}
            onChange={handleDateChange}
            showIcon
            dateFormat="yy-mm-dd"
           
          />
        </div>

        <div>
          <label className="block mb-1">Avatar URL</label>
          <InputText name="avatar" value={formData.avatar} onChange={handleChange}  />
        </div>
      </div>
    </Dialog>
  );
};

export default AddUserModal;
