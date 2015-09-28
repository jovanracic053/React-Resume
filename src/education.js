var Education = React.createClass({

  displayName: "Education",

  propTypes: {
      educationData: React.PropTypes.object
  },

  render: function() {
  	getEducation = 	this.props.educationData.map(function(item) {
  		var startdate = moment(item.startDate).format("MMM, YYYY");
  		var enddate = moment(item.endDate).format("MMM, YYYY");
  		return <div><h3>{item.studyType} {item.area}</h3>
  				<h4>{item.institution}</h4>
  				<p>Studied: {startdate} - {enddate}</p></div>
  	});
	return (
	  <div className="education"><h2>Education</h2>{getEducation}</div>
	)
  }

});
