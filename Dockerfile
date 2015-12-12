FROM ubuntu:trusty
MAINTAINER alaudadoc alaudadoc@alauda.cn

RUN yum update && yum install -y nodejs
EXPOSE 80
COPY server.js /
CMD ["nodejs", "/server.js"]
