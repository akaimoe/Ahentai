FROM python:3.8
ENV PYTHONUNBUFFERED 1
# RUN apt-get update
# RUN apt-get install python3-dev default-libmysqlclient-dev -y
RUN mkdir /src
WORKDIR /src
RUN pip3 install pip -U -i https://pypi.tuna.tsinghua.edu.cn/simple
COPY . /src/
RUN pip3 install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
