// How to destructer Objects

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor 

// destructer Objects
const {courseInstructor: instructor, price} = course
console.log(instructor);