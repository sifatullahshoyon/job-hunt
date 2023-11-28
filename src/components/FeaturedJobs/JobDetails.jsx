import React, { useEffect, useState } from 'react';
import { useNavigation, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { CalendarDaysIcon, CurrencyDollarIcon, EnvelopeIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/24/solid';

const JobDetails = () => {
    // const [jobData , setJobData] = useState();
    // const {id} = useParams();
    // const navigation = useNavigation();
    // useEffect(() => {
    //     const loadedData = async () => {
    //         const res = await fetch('/data/jobs.json');
    //         const data = await res.json();
    //         setJobData(data)
    //     }
    //     return loadedData;
    // } , [])

    // if(navigation.state === "loading"){
    //     <Loading />
    // };

    // const singleJob = jobData?.find(job => job.id.toString() === id);

    const [jobData , setJobData] = useState();
    const [loading , setLoading] = useState(false);
    const {id} = useParams();
    const navigation = useNavigation();
    useEffect(() => {
        setLoading(true)
        fetch('/data/jobs.json')
        .then(res => res.json())
        .then(data => {
            setJobData(data)
            setLoading(false)
        })
    } , [])

    if(loading){
        return <Loading />
    };

    if(navigation.state === "loading"){
        <Loading />
    };

    const singleJob = jobData?.find(job => job.id.toString() === id);

    return (
        <div className='container mx-auto p-5 font-manrope'>
            <div className='md:flex gap-6 mt-32'>
                <div className='w-full md:w-3/5 h-96 mb-8 p-5'>
                    <p className='mb-6 text-gray-500'><small className='font-extrabold text-black'>Job Description:</small> {singleJob?.job_description ? singleJob?.job_description : "Data Not Found"}</p>
                    <p className='mb-6 text-gray-500'><small className='font-extrabold text-black'>Job Responsibility:</small> {singleJob?.job_responsibility ? singleJob?.job_responsibility : "Data Not Found"}</p>
                    <p className='mb-6 text-gray-500'><small className='font-extrabold text-black'>Educational Requirements:</small> {singleJob?.educational_requirements ? singleJob?.educational_requirements : "Data Not Found"}</p>
                    <p className='mb-6 text-gray-500'><small className='font-extrabold text-black'>Experiences:</small> {singleJob?.experiences ? singleJob?.experiences : "Data Not Found"}</p>
                </div>
                <div className='w-full md:w-2/6  '>
                    <div className='h-auto bg-indigo-100 p-8 rounded  mb-6 '>
                        <h3 className='text-black font-bold text-xl'>Job Details</h3>
                        <hr className='my-6 w-full h-[2px] bg-indigo-400' />
                        <div className='flex items-center gap-2 mb-4'>
                            <small ><CurrencyDollarIcon className="h-6 w-6 text-indigo-400 font-light gap-x-2" /></small>
                            <p className='text-gray-500'><span className='text-xl font-manrope font-bold text-black'>Salary :</span> {singleJob?.salary ? singleJob.salary : 'Data Not Found'} </p>
                        </div>
                        <div className='flex items-center gap-2 mb-8'>
                            <small ><CalendarDaysIcon className="h-6 w-6 text-indigo-400 font-light gap-x-2" /></small>
                            <p className='text-gray-500'><span className='text-xl text-black font-manrope font-bold'>Job Title :</span> {singleJob?.job_title  ? singleJob?.job_title : "Data Not Found"} </p>
                        </div>
                        <h3 className='text-black font-bold text-xl'>Contact Information</h3>
                        <hr className='my-6 w-full h-[2px] bg-indigo-400' />
                        <div className='flex items-center gap-2 mb-8'>
                            <small ><PhoneIcon className="h-6 w-6 text-indigo-400 font-light gap-x-2" /></small>
                            <p className='text-gray-500 font-manrope'><span className='text-xl text-black  font-bold'>Phone :</span> {singleJob?.contact_information?.phone ? singleJob?.contact_information?.phone : "Data Not Found"} </p>
                        </div>
                        <div className='flex items-center gap-2 mb-8'>
                            <small ><EnvelopeIcon className="h-6 w-6 text-indigo-400 font-light gap-x-2" /></small>
                            <p className='text-gray-500 font-manrope'><span className='text-xl text-black  font-bold'>Email :</span>  {singleJob?.contact_information?.email ? singleJob?.contact_information?.email : "Data Not Found"} </p>
                        </div>
                        <div className='flex items-center gap-2 mb-8'>
                            <small ><MapPinIcon className="h-6 w-6 text-indigo-400 font-light gap-x-2" /></small>
                            <p className='text-gray-500 font-manrope'><span className='text-xl text-black  font-bold'>Address :</span> {singleJob?.contact_information?.address ? singleJob?.contact_information?.address : "Data Not Found"} </p>
                        </div>
                    </div>
                    <div>
                        <button className='btn-primary w-full'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;