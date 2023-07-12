import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'

import '../../css/tech-home.css'
import { useNavigate } from 'react-router-dom'

export default function TechHome(){

    var path = process.env.PUBLIC_URL;

    const navigate = useNavigate();


    return(

        <div>
            <Heading className='home-header'>Inventory System</Heading>

            <div className='dashboard'>

                <SimpleGrid spacing={4} templateColumns='repeat(3, minmax(200px, 1fr))'>

                    <Card id='cardbox'>
                        <CardHeader>
                            <Heading size='md'> Manage Assets</Heading>
                        </CardHeader>
                        <CardBody>
                            <img src={path + '/icon-assets.png'} />
                            <Text>View and manage through the list of assets and tools stored in the inventory.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button onClick ={() => {navigate('/tech-asset')} }>Click to go here</Button>
                        </CardFooter>
                    </Card>
                    <Card id='cardbox'>
                        <CardHeader>
                            <Heading size='md'> Request Forms</Heading>
                        </CardHeader>
                        <CardBody>
                            <img src={path + '/icon-forms.png'} />
                            <Text>Create and track your requests for use or purchase of items.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button onClick ={() => {navigate('/tech-request')} } >Click to go here</Button>
                        </CardFooter>
                    </Card>
                    <Card id='cardbox'>
                        <CardHeader>
                            <Heading size='md'> Generate Reports</Heading>
                        </CardHeader>
                        <CardBody>
                            <img src={path + '/icon-report.png'} />
                            <Text>Generate a summary report of all the items frequently used, added, donated, or disposed this sem.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button onClick ={() => {navigate('/report')} }>Click to go here</Button>
                        </CardFooter>
                    </Card>

                </SimpleGrid>

            </div>
        </div>
    )
}