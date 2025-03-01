# Use the official Python runtime image
FROM python:3.11  
 
# Create the app directory
RUN mkdir /app
 
# Set the working directory inside the container
WORKDIR /app
 
 
# Upgrade pip
RUN pip install --upgrade pip 
 
# Copy the Django project  and install dependencies
COPY requirements.txt  ./
 
# run this command to install all dependencies 
RUN pip install -r requirements.txt
 
# Copy the Django project to the container
COPY . .
 
# Expose the Django port
EXPOSE 8080
 
# Run Django’s development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8080", "--noreload"]

