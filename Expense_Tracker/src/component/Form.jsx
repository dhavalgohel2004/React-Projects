import React, {useState} from 'react'

function Form({addExpense}) {

    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});
    const [formKey, setFormKey] = useState(Date.now());

    const validateForm = () =>{
        const newErrors = {};

        if(!amount){
            newErrors.amount = "Amount is Required!";
        } else if(isNaN(amount) || amount <= 0){
            newErrors.amount = "Amount must be a positive number!";
        }

        if(!description){
            newErrors.description = "Description is Required!";
        } else if(description.length < 3){
            newErrors.description = "Description must be at least 3 character!";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(validateForm()){
            const newExpense = {
                id: Date.now(),
                amount: parseFloat(amount),
                description,
            };
            addExpense(newExpense);

            setAmount('');
            setDescription('');
            setErrors({});
            setFormKey(Date.now());
        }
    }

  return (
    <div>
        <form key={formKey} onSubmit={onSubmit} className='flex'>
            <div className='relative'>
            <input type="number" 
                   className='me-4 bg-black text-white py-2 px-4 rounded-xl'
                   onChange={(e) => setAmount(e.target.value)} 
                   placeholder="Expense" />
            {errors.amount && <p className='text-red-500 top-full ps-2 absolute text-xs'>{errors.amount}</p>}
            </div>
            <div className='relative'>
            <input type="text" 
                   placeholder='Description' 
                   onChange={(e) => setDescription(e.target.value)}
                   className='me-4 bg-black text-white py-2 px-4 rounded-xl'/>
            {errors.description && <p className='text-red-500 top-full ps-2 absolute text-xs'>{errors.description}</p>}
            </div>
            <input type="submit" 
                   value="ADD" 
                   className='bg-green-400 text-white px-4 rounded-xl cursor-pointer' />
        </form>
    </div>
  )
}

export default Form