import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import ApplicationLogo from '@/components/ApplicationLogo';
import Example from '@/components/Example';
import DangerButton from '@/components/DangerButton';
import Checkbox from '@/components/Checkbox';
import NavLink from '@/components/NavLink';

export default function Upload({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Upload</h2>}
        >
            <Head title="Upload" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Upload here
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
