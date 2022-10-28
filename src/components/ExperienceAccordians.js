import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Experience() {
    const [value, setValue] = React.useState(0);
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [orientation, setOrientation] = useState();

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        if ((windowSize.innerWidth > 300 && windowSize.innerWidth < 600) && (windowSize.innerHeight > 600 && windowSize.innerHeight < 1000))
            setOrientation('horizontal');
        else setOrientation('vertical');
    }, []);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='tabsPadding'>
            <div className='text-center'>
                <label className='tittleHeadProf'>Professional Experience</label>
            </div>
            <Box
                sx={{ bgcolor: 'black', display: 'flex', height: '15rem', flexWrap: 'wrap' }}
            >
                <Tabs
                    orientation={orientation}
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="horizontal tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', marginTop: '13px' }}
                >
                    <Tab label="Syoft" {...a11yProps(0)} style={{ color: 'white' }} />
                    <Tab label="Cognizant" {...a11yProps(1)} style={{ color: 'white' }} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    {/* <p><span className='borderBottom'>Info</span> : A product based company in hyderabad, which primarily focus in building SaaS Applications & CRM Tools using latest technologies.</p> */}
                    <p><span className='borderBottom'>Role</span> : Software Developer</p>
                    <p><span className='borderBottom'>Experience</span> : December 2021 - Present</p>
                    <label className='borderBottom' style={{ fontSize: '1.3rem' }}>Roles and Responsibilities </label> :
                    <ul style={{listStyleType : 'square'}}>
                        <li>Building Robust SaaS applications.</li>
                        <li>Developed Ecommerce Applications.</li>
                        <li>Build Panel for industries to manage their hospitality and entire infrastructure.</li>
                        <li>Developed and implemented user interface components using React, Hooks.</li>
                        <li>Performed CRUD Operations for Web and Mobile browser applications.</li>
                        <li>Took Product Ownership for One Project including quality surveying and client correspondence.</li>
                        <li>Trained Interns in key areas.</li>
                        <li>Worked closely with other team members to identify and remove software bugs.</li>
                        <li>Developed new, efficient and well-tested code for a variety of different software projects.</li>
                        <li>Optimised interfaces between hardware and software to enhance usability.</li>
                        <li>Evaluated functionality and performance of existing software to best target new releases.</li>
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <p><span className='borderBottom'>Experience</span> : July 2019 - November 2021</p>
                    <p><span className='borderBottom'>Role</span> : Software Associate</p>
                    <label className='borderBottom' style={{ fontSize: '1.3rem' }}>Roles and Responsibilities </label> :
                    <ul style={{listStyleType : 'square'}}>
                        <li>Developed and implemented user interface components using React, Hooks</li>
                        <li>Improved front-end static websites using bootstrap and flex box.</li>
                        <li>Building reusable components and frontend libraries.</li>
                        <li>Integrating web pages from static to dynamic by using the latest react concepts.</li>
                        <li>Attended training to learn software development theory, techniques and coding best practices.</li>
                        <li>Helped with troubleshooting, debugging and upgrading existing software, making software more efficient and effective.</li>
                        <li>Learned new skills, testing techniques and troubleshooting best practices.</li>
                    </ul>
                </TabPanel>
            </Box>
        </div>
    );
}
