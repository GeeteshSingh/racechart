import img1 from './../spreadsheet.png'

function Summary() {
    return (
        <div style={{padding: 50, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 500}}>
            <p>
                Data science is a powerful approach to resolving complicated issues, analysing massive information, and
                uncovering trends and insights from data. It is also an excellent approach to connect with day-to-day
                activities, as it may assist in identifying areas for improvement, uncovering trends and correlations,
                and even making predictions about future occurrences. Data science may bring a fresh perspective to
                initiatives, allowing them to be more efficient and productive. Organizations may acquire useful
                insights and make better, more informed decisions by applying information analytics.
            </p>
            <br/>
            <p>I've been fascinated with data ever since I started learning data science. So I started surfing the
                internet on how various data can be used and analysed and I found this awesome and fun way to check
                trending searches.</p>
            <br/>
            <p>We used Google Trends (https://trends.google.com/trends/?geo=IN) in the following live graphic; you may
                search for the data you're interested in here (upto 5 ). I've gathered statistics on Indian top food
                searches
                because who really doesn't enjoy Indian cuisine?</p>
            <br/>
            <p>
                Since we are new here, we have a wide range of resources to integrate our work with, therefore we will
                be using Flourish.
                After deciding on the most well-known food searches, I retrieved the csv file for the information and
                date I provided.
                <br/>
                <img style={{
                    width: 700,
                    height: 400,
                    borderRadius: 25,
                    padding: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} src={img1} alt={"Sheet"}/>
                <br/>
                Once the data has been collected, you may use any of the tools available here to open sheets. I
                personally use Google Sheets because it is quick and simple to use. We will pivot the table in Excel or
                special transpose it in a Google spreadsheet if we require data that is date-based. Date and food should
                be on the Y-axis.
            </p>
            <br/>
            <p>
                Flourish Studio is a strong online data visualisation tool. This tool can create a wide range of static
                and dynamic graphics. It features an intuitive, user-friendly interface that
                allows users to easily upload and organize their data, create stunning visuals, and share them with
                viewers. Flourish also offers powerful analytics and data exploration tools, enabling users to gain a
                deeper understanding of their data. The platform also offers a library of templates, allowing users to
                quickly create visualizations without needing to build them from scratch. Flourish is an ideal platform
                for both experienced and beginner data visualizers, making it easy to create stunning, engaging visuals
                for any story.
            </p>
        </div>
    )
}

export default Summary