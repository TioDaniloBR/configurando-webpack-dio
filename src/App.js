import React from "react";

// const buttonA = <button>Histórico cliente</button>;
// const buttonB = <button>Cadastrar Cliente</button>;
// const hasCustomer = true;

//codigo normal descrito
// const App=()=>{
//   return(
//     <div>
//       <p>Terceira aula Reactjs iniciante.</p>
//       <p>Renderização Condicional</p>
//       {hasCustomer ? (
//       	<div>
//       		clique no botão abaixo para vizualizar o histórico dos clientes <br/>
//       		{buttonA}
//       	</div>
//      	):(
//      		<div>
//      			clique no botão abaixo para cadastrar um novo cliente <br/>
//      			{buttonB}
//      		</div>
//      	)}     
//     </div>
//   );
// };

//mesmo codigo com funções
// const buttonA = <button>Histórico cliente</button>;
// const buttonB = <button>Cadastrar Cliente</button>;
// const hasCustomer = false;

// const App=()=>{

//   const renderShowHistory=()=> (
//   		<div>
// 	  		clique no botão abaixo para vizualizar o histórico dos clientes <br/>
// 	  		{buttonA}
//       	</div>
//   	)

//   const renderNewClient=(
//   	<div>
//   	  clique no botão abaixo para cadastrar um novo cliente <br/>
//   	  {buttonB}
//   	</div>
//   )

//   const showCustomer = () => {
//   	if(!hasCustomer) return null;
//   	return(
//   			<div>
//   				<h1>Nomde do cliente: Danilo Silva</h1>
//   			</div>
//   		)
//   }

//   return(
//     <div>
//       <p>Terceira aula Reactjs iniciante</p>
//       <p>Renderização condicional</p>
//       {hasCustomer ? renderShowHistory() : renderNewClient}
//       <div>
//       	{showCustomer()}
//       </div>
//     </div>
//   );
// };


//listas e chaves

const customers = [
	{
		id: 1,
		nome: 'Danilo Silva',
		skills: ['React', 'CSS', 'Boostrap']
	},
	{
		id: 2,
		nome: 'Diogo Silva',
		skills: ['Solda', 'Mecânica', 'Funilaria']
	},
	{
		id: 3,
		nome: 'Daniela Silva',
		skills: ['Emissão de guias']
	},
	{
		id: 4,
		nome: 'Sueli Silva',
		skills: ['Emissão de guias']
	},
	{
		id: 5,
		nome: 'Marcos Silva',
		skills: ['Solda', 'Mecânica', 'Funilaria']
	}
]

const App=()=>{

	const handleClick = (e, id) => {
		console.log('Deletar cliente:',id)
	}

	const renderCustomers = (costumer, index) => {
		return(

				//cada filho na lista deve ter um key de propriedade
				<li key={index}>
					Id: {costumer.id} 
					
					<br/>Nome: {costumer.nome}<button onClick={(e) => handleClick(e, costumer.id)}>Delete</button>
					<br/>Skills: {costumer.skills.map(renderSkills)}
					<br/><br/>

				</li>
			)
	}
	const renderSkills = (skill,index) => {
		return (
				<div key={index} style={{display:'inline'}}>{skill} </div>
			)
		
	}

  return(
    <div>
      <p>Terceira aula Reactjs iniciante</p>
      <p>Renderização condicional</p>
      <div>
      	<ul>
      		{customers.map(renderCustomers)}
      	</ul>
      </div>
    </div>
  );
};

//manipulando eventos


// const App=()=>{

// 	const name = 'Danilo'

// 	const handleChange = (e) => {
// 		const {value} = e.target
// 		console.log(value)
// 	}

// const showEvent = (e) => {
// 	console.log("clicou")
// 	console.log(e);
// 	alert(name)
// }
// const Button = <button onClick={showEvent}>Mostrar Evento</button>


//   return(
//     <div>
//       <p>Terceira aula Reactjs iniciante</p>
//       <p>Renderização condicional</p>
//       <input onChange={handleChange}/>
//       {deleteButton}
//     </div>
//   );
// };







export default App;