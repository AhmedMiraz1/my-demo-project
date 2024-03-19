
import { LineChart as LC, Line,XAxis, YAxis } from 'recharts';
const LineChart = () => {

    const subjectMarksData =[
        {"id": 1, "name": "John", "math_marks": 85, "physics_marks": 78, "chemistry_marks": 82},
        {"id": 2, "name": "Emily", "math_marks": 78, "physics_marks": 85, "chemistry_marks": 76},
        {"id": 3, "name": "Michael", "math_marks": 92, "physics_marks": 88, "chemistry_marks": 90},
        {"id": 4, "name": "Sophia", "math_marks": 68, "physics_marks": 72, "chemistry_marks": 65},
        {"id": 5, "name": "Jacob", "math_marks": 90, "physics_marks": 92, "chemistry_marks": 88},
        {"id": 6, "name": "Emma", "math_marks": 75, "physics_marks": 80, "chemistry_marks": 72},
        {"id": 7, "name": "William", "math_marks": 88, "physics_marks": 84, "chemistry_marks": 86},
        {"id": 8, "name": "Olivia", "math_marks": 82, "physics_marks": 79, "chemistry_marks": 80},
        {"id": 9, "name": "Alexander", "math_marks": 79, "physics_marks": 75, "chemistry_marks": 78},
        {"id": 10, "name": "Ava", "math_marks": 95, "physics_marks": 94, "chemistry_marks": 92}
      ]
      
      
    return (
        <div className='mt-20'>
            <LC width={800} height={600} data={subjectMarksData}>
                <XAxis dataKey={'name'}/>
                <YAxis></YAxis>
                <Line dataKey="math_marks" stroke='red'></Line>
                <Line dataKey="physics_marks" stroke='green'></Line>
                <Line dataKey="chemistry_marks" stroke='blue'></Line>

            </LC>
            
        </div>
    );
};

export default LineChart;