var videoObj = document.querySelector('video')
var playBtn = document.querySelector('.play_pause')
// 0.实现播放按钮
// 1.获取所需要的元素
// 2.点击播放按钮控制视频的播放
// 3.切换为暂停按钮
// 4.点击暂停按钮实现暂停
// 5.实现切换
playBtn.addEventListener('click', function(){
	if(videoObj.paused){
		// 如果视频处于播放状态
		videoObj.play()
		this.classList.remove('fa-play')
		this.classList.add('fa-pause')
	}else{
		videoObj.pause()
		this.classList.add('fa-play')
		this.classList.remove('fa-pause')
	}
})
var progressTimer = document.querySelector('.progress_timer')
var durationTimer = document.querySelector('.duration_timer')
var progress = document.querySelector('.progress')

let {totalT,presentT} = {totalT:0,presentT:0}
videoObj.addEventListener('canplay',function(){
	totalT = this.duration
	var videoDuration = formatTime(totalT)
	durationTimer.innerHTML = videoDuration
})

videoObj.addEventListener('timeupdate',function(){
	presentT = this.currentTime
	var videoCurrent = formatTime(presentT)
	progressTimer.innerHTML = videoCurrent
    var percent = presentT/totalT*100
progress.style.width = percent+'%'
})
function formatTime(t){
	var h = parseInt(t/3600)
	h = h<10?'0'+h:h 
	var m = parseInt(t%3600/60)
	m = m<10?'0'+m:m
	var s = parseInt(t%60)
	s = s<10?'0'+s:s
	return h+':'+m+':'+s
}


