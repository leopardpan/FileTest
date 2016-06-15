require('TalkingData,Bugly');
defineClass('AppDelegate', {
	
	setupAnalytics: function() {
	    TalkingData.setExceptionReportEnabled(YES);
	    TalkingData.sessionStarted_withChannelId("C08C1943294887A2104FF41FA4BA68DD", "fir");

	    Bugly.startWithAppId("900033953");
	}
})
