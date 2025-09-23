import React from 'react'

function PartOne() {
  return (
    <div>
        <div className='px-[10%] bg-gray-100'>
          <div className='grid grid-cols-4 gap-6 py-10 '>
            <div className='p-4 shadow-xl bg-white rounded-lg'>
              <h1 className='text-2xl font-semibold py-2'>Products</h1>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <img src="/vegetable/40.jpg" alt="" />
                </div>
                <div>
                  <img src="/vegetable/41.jpg" alt="" />
                </div>
                <div>
                  <img src="/vegetable/46.jpg" alt="" />
                </div>
                <div>
                  <img src="/vegetable/43.jpg" alt="" />
                </div>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default PartOne