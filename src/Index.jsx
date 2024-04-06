import React, { useEffect, useState } from 'react'
import {useParams,useSearchParams} from 'react-router-dom'
function Index() {
  const [category,setCategory ] = useState('lessons')
  let [searchParams, setSearchParams] = useSearchParams({
    'category':''
  });

  const categoryItem = searchParams.get('category')||"lessons"

  useEffect(()=>{ 
    setCategory(categoryItem)
  },[category])

  return (
    <div>
        
          <button className={` px-4 py-2 rounded-lg `} onClick={(e) => {
                            setCategory(e.target.value)
                            setSearchParams({
                              'category':e.target.value
                            });
                            }} value="lessons">
              Lessons</button> 
              <button className={` px-4 py-2 rounded-lg `} onClick={(e) => {
                            setCategory(e.target.value)
                              setSearchParams({
                                'category':e.target.value
                              });
                            }} value="course">
              Course</button> 
                    

                            
            { 
              categoryItem == "lessons"?( 
                <div>
                  This is lessons
                </div>
              ):(
                <div>
                  This is course
                </div>
              )
            }
    </div>
  )
}

export default Index
