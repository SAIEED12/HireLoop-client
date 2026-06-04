import React from 'react';
import PostJobForm from './PostJobForm';
import { getLoggerdInRecruiterCompany } from '@/lib/api/companies';

const PostJobPage = async() => {

    const company = await getLoggerdInRecruiterCompany()

    return (
        <div>
            <PostJobForm company={company}/>
        </div>
    );
};

export default PostJobPage;