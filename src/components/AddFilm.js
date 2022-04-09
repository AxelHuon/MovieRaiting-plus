import React from 'react'
import { View, TextInput, StyleSheet, Button} from 'react-native'

class AddFilm extends React.Component {
    constructor(props) {
        super(props) 
        this.stateUpdated = false
        this.state = {
            title: '',
            vote_average: '',
            overview: '',
            comments: '',
            release_date: '',
            isFormValid: false
          }  
    }

    validForm = () => {
        if (this.state.title.length > 1) {
            this.setState({ isFormValid: true })
        } else {
            this.setState({ isFormValid: false })
        }
    }
  
    titleChange = title => {
        this.setState({ title: title }, this.validForm)
    }
  
    gradeChange = vote_average => {
        this.setState({ vote_average: vote_average }, this.validForm)
    }
  
    overviewChange = overview => {
        this.setState({ overview: overview }, this.validForm)
    }
    commentsChange = comments => {
        this.setState({ comments: comments }, this.validForm)
    }
  
    releaseDateChange = release_date => {
      this.setState({ release_date: release_date }, this.validForm)
  }
  
    handleSubmit = () => {
      this.props.route.params.addFilm(this.state)
      this.props.navigation.goBack()
    }

    render() {
        return(
            <View style={styles.main_container}>
                <TextInput 
                value={this.state.title}
                onChangeText={this.titleChange} 
                placeholder="Title" 
                style={styles.textinput}>
                </TextInput>
                <TextInput 
                value={this.state.vote_average}
                onChangeText={this.gradeChange} 
                placeholder="Grade" 
                style={styles.textinput}>
                </TextInput>
                <TextInput 
                value={this.state.overview}
                onChangeText={this.overviewChange} 
                placeholder="Overview" 
                style={styles.textinput}>
                </TextInput>
                <TextInput 
                value={this.state.comments}
                onChangeText={this.commentsChange} 
                placeholder="Comments" 
                style={styles.textinput}>
                </TextInput>
                <TextInput 
                value={this.state.release_date}
                onChangeText={this.releaseDateChange}
                placeholder="Release date" 
                style={styles.textinput}>
                </TextInput>
                <View style={styles.container_btn}>
                    <Button title='Add film' color="#ff4d01" onPress={ () => this.handleSubmit()} disabled={!this.state.isFormValid} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textinput: {
      width: "90%",
      margin: 10,
      padding: 10,
      backgroundColor: "#fff",
      color: "#000",
      height: 50,
    },
    container_btn: {
        width: "80%",
        margin: 10,
    }
  })
  

export default AddFilm