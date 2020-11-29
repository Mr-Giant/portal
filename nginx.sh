#!/bin/bash
NGINX=/usr/local/nginx/sbin/nginx
PID=/usr/local/nginx/logs/nginx.pid

start()
{
	if [ -f $PID ] 
	then
		echo "nginx已经启动!"
	else
		$NGINX
		echo "nginx启动成功!"
	fi
}

stop()
{
	if [ -f $PID ]
	then
		killall -s QUIT nginx
		echo "nginx已经关闭!"
	else
		echo "nginx未启动!"
	fi
}

restart()
{	
	if [ -f $PID ]
	then
		stop
	fi
	start
}

case $1 in
"start") start
	;;
"stop") stop
	;;
"restart") restart
	;;
*) echo "请输入正确的操作参数start|stop|restart"
	;;
esac
