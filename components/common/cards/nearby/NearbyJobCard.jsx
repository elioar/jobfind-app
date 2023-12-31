import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

import { CheckImageURL, checkImageURL } from '../../../../utils'

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
    <TouchableOpacity style={styles.logoContainer}>
      <Image
        source={{ uri: checkImageURL(job.employer_logo)
        ? job.employer_logo
      :  'https://toppng.com/uploads/preview/free-fire-png-logo-115690680921wyscrhw1c.png'
      }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>
     
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>
          {job.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard