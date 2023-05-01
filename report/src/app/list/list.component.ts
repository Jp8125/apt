import { Component } from '@angular/core';
import { St_report } from '../modules/marks';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
students=[
  {
    "StudentID": 1,
    "StudentName": "Rahul"
  },
  {
    "StudentID": 2,
    "StudentName": "Rita"
  },
  {
    "StudentID": 3,
    "StudentName": "Rohan"
  }
]
st_marks:St_report={StudentID:0,StudentName:"",StudentImage:"",Address:"",DOB:"",Subjects:{Hindi:{Internal:0,External:0},Science:{Internal:0,External:0},Math:{Internal:0,External:0},English:{Internal:0,External:0}}}
marks =[
  {
    "StudentID": 1,
    "StudentName": "Rahul",
    "StudentImage": "https://d2c967qfslpzim.cloudfront.net/images/img1.jpg",
    "Address": "Ahmedabad",
    "DOB": "1980-02-9",
    "Subjects": {
      "Hindi": {
        "Internal": 90,
        "External": 100
      },
      "English": {
        "Internal": 90,
        "External": 100
      },
      "Math": {
        "Internal": 90,
        "External": 100
      },
      "Science": {
        "Internal": 40,
        "External": 50
      }
    }
  },
  {
    "StudentID": 2,
    "StudentName": "Rita",
    "StudentImage": "https://d2c967qfslpzim.cloudfront.net/images/img2.jpg",
    "Address": "Ahmedabad",
    "DOB": "1987-02-9",
    "Subjects": {
      "Hindi": {
        "Internal": 30,
        "External": 100
      },
      "English": {
        "Internal": 80,
        "External": 100
      },
      "Math": {
        "Internal": 70,
        "External": 40
      },
      "Science": {
        "Internal": 40,
        "External": 50
      }
    }
  },
  {
    "StudentID": 3,
    "StudentName": "Rohan",
    "StudentImage": "https://d2c967qfslpzim.cloudfront.net/images/img3.jpg",
    "Address": "Ahmedabad",
    "DOB": "1987-02-9",
    "Subjects": {
      "Hindi": {
        "Internal": 30,
        "External": 60
      },
      "English": {
        "Internal": 80,
        "External": 60
      },
      "Math": {
        "Internal": 35,
        "External": 40
      },
      "Science": {
        "Internal": 40,
        "External": 50
      }
    }
  }
]
pass(val:string) {
  let id=parseInt(val);
  this.st_marks=this.marks.filter(obj=>obj.StudentID === id)[0]
}
}