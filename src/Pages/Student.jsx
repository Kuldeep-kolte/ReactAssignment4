import React from 'react';

const Student = () => {
    return (
        <>
        <div className="container">
            <header>
                <h1 className='head1'>Student Details</h1>
                <button className='btn'>Add new student</button>
            </header>
            <table id="details">
                <tr>
                    <td className='t-head'>Name</td>
                    <td className='t-head'>Age</td>
                    <td className='t-head'>Course</td>
                    <td className='t-head'>Batch</td>
                    <td className='t-head'>Change</td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>26</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td><a href='#link'>Edit</a></td>
                </tr>
                <tr>
                    <td>Doe</td>
                    <td>25</td>
                    <td>MERN</td>
                    <td>November</td>
                    <td><a href='#link'>Edit</a></td>
                </tr>
                <tr>
                    <td>Biden</td>
                    <td>26</td>
                    <td>MERN</td>
                    <td>September</td>
                    <td><a href='#link'>Edit</a></td>
                </tr>
                <tr>
                    <td>Barar</td>
                    <td>22</td>
                    <td>MERN</td>
                    <td>September</td>
                    <td><a href='#link'>Edit</a></td>
                </tr>
                <tr className='a'>
                    <td>Christ</td>
                    <td>23</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td><a href='#link'>Edit</a></td>
                </tr>
            </table>
        </div>
     </>
    );
}

export default Student;
