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

export default function PersonalInfo() {
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
        <div className='tabsPadding personalTab'>
            <div className='text-center mt-5 pt-5'>
                <label className='tittleHead'>Personal Info</label>
            </div>
            <Box
                sx={{ flexWrap: 'wrap', bgcolor: 'black', display: 'flex', height: '10rem' }}
            >
                <Tabs
                    orientation={orientation}
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', marginTop: '13px' }}
                >
                    <Tab label="BTech" {...a11yProps(0)} style={{ color: 'white' }} />
                    <Tab label="Info" {...a11yProps(1)} style={{ color: 'white' }} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <p><span className='borderBottom'>College</span> : Avanthi Institute Of Engineering & Technology • Visakapatnam, Andhra Pradesh</p>
                    <p><span className='borderBottom'>Academic</span> : August 2013 - May 2017</p>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <p><span className='borderBottom'>DOB</span> : 23/Feb/1996</p>
                    <p><span className='borderBottom'>Launguages</span> : English, Telugu</p>
                    <p><span className='borderBottom'>Current Location</span> : Manikonda, Hyderabad</p>
                    <p><span className='borderBottom'>HomeTown</span> : Visakapatnam</p>
                </TabPanel>
            </Box>
        </div>
    );
}
