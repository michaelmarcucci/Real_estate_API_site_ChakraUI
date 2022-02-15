import { Box, Flex, Spacer, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';

const PropertyDetails = ( { propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } } ) => (
    <Box maxWidth="1000px" margin="auto" p="4" >
        { photos && <ImageScrollbar data={photos} /> }
        <Box w="full" p="6" >
            <Flex paddingTop="2" alignItems="center" justifyContent="space-between"  >
                <Flex alignItems="center">
                    <Box paddingRight="3" color="green.400"  >{ isVerified && <GoVerified/> }</Box>
                    <Text fontWeight="bold" fontSize="lg" >
                        AED {millify(price)}{ rentFrequency && `/${rentFrequency}` } 
                    </Text>
                </Flex>
                <Spacer/>
                <Avatar size="sm" src={agency?.logo?.url} />
            </Flex>
            <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400" >
                {rooms} <FaBed/> | {baths} <FaBath/> | {millify(area)} sqft <BsGridFill/> 
            </Flex>
            <Box marginTop="2" >
                <Text fontSize="lg" marginBottom="2" fontWeight="bold" >{ title }</Text>
                <Text lineHeight="2" color="gray.600" >{ description }</Text>
            </Box>
            <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between" >
                <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3" >
                    <Text>Type</Text>
                    <Text fontWeight="bold" >{type}</Text>
                </Flex>
                <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3" >
                    <Text>Purpose</Text>
                    <Text fontWeight="bold" >{purpose}</Text>
                </Flex>
{/* Below are two pieces of personal refactoring. 1. Given that the furnishingStatus property can be left blank and
    still wanting to keep space consistent I created a ternary to render the property if it had a value, or a string
    if it didn't. 2. Added the > 0 clause to the Amenities rendering section because it was still rendering the "0" if
    that was the length, now it just won't render if empty */}
                <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3" >
                  <Text>Furnishing Status</Text>
                  <Text fontWeight="bold">
                      { furnishingStatus ? (<>{furnishingStatus}</>) : "STATUS UNAVAILABLE" }
                  </Text>
                </Flex>
            </Flex>
            <Box>
                { amenities.length > 0 && <Text fontSize="2xl" fontWeight="black" marginTop="3" >Amenities</Text> }
                <Flex flexWrap="wrap" >
                    {amenities?.map( (item) => (
                        item?.amenities?.map( (amenity) => (
                            <Text 
                                key={amenity.text} 
                                fontWeight="bold" 
                                color="blue.400" 
                                fontSize="lg" 
                                p="2"
                                bg="gray.200"
                                m="1"
                                borderRadius="5"
                            >{ amenity.text }</Text>
                        ) )
                    ) )}
                </Flex>
            </Box>
        </Box>
    </Box>
);

export async function getServerSideProps( { params: {id} } ) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)

    return {
        props: {
            propertyDetails: data,
        }
    }
}

export default PropertyDetails