import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const SharedFooter = () => (
    <div style={{ maxWidth: 700, margin: 'auto', textAlign: 'center' }}>
        <Typography variant="caption" align={'center'}>
            {'Copyright © '}
            <Link
                color="inherit"
                href="http://www.my-company.com"
                target="_blank"
                rel="noreferrer">
                My Company
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    </div>
);

export default SharedFooter;
