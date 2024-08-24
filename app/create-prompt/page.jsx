'use client';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';

function createPrompt() {

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    });

    const createPrompt = (e) => {
        e.preventDefault();

    }
    return (
        <div>
            <Form
                type="Create"
                post={post}
                setPost={setPost}
                submitting={setSubmitting}
                handleSubmit={createPrompt}

            />

        </div>
    )
}

export default createPrompt
