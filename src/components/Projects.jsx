import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Styles/Projects.css';
import ecommerceSS from './assets/ecommerceSS.png'
import weatherSS from './assets/weatherSS.png'
import rickSS from './assets/rickSS.png'
import crudSS from './assets/crudSS.png'
import pokemonSS from './assets/pokemonSS.png'
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Project() {
    return (
        <section className='projects__container'>
            <Typography variant='h2' m={5} textAlign='center'>Latest projects</Typography>
            <div className='projects__1row' >
            <Card className='project1' sx={{ maxWidth: 345 }} >
                <CardActionArea href='https://e-commerce-academlogen27.netlify.app/'>
                    <CardMedia
                        component="img"
                        height="140"
                        image={ecommerceSS}
                        alt="Ecommerce"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            E-commerce
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            E-commerce made with html css and javascript using an academlo API
                            <hr/>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant='outlined' size="small" color="primary" href='https://github.com/marcovm17/e-commerce'>
                        <GitHubIcon /> View code
                    </Button>
                </CardActions>
            </Card>

            <Card className='project2' sx={{ maxWidth: 345 }}>
                <CardActionArea href='https://weatherappmadereact.netlify.app/'>
                    <CardMedia
                        component="img"
                        height="140"
                        image={weatherSS}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Weather App
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Weather web app made with openweather API with react
                            <hr/>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant='outlined' size="small" color="primary" href='https://github.com/marcovm17/WeatherApp-React'>
                        <GitHubIcon />View code
                    </Button>
                </CardActions>
            </Card>

            <Card className='project3' sx={{ maxWidth: 345 }}>
                <CardActionArea href='https://rickandmortyappbylocation.netlify.app/'>
                    <CardMedia
                        component="img"
                        height="140"
                        image={rickSS}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Rick and Morty App
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Dimension finder rick and morty web application using API with react
                            <hr />
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant='outlined' size="small" color="primary" href='https://github.com/marcovm17/RichAndMorty'>
                        <GitHubIcon />View code
                    </Button>
                </CardActions>
            </Card>
            </div>

            <div className='projects__2row' >
            <Card className='project4' sx={{ maxWidth: 345 }}>
                <CardActionArea href='https://cruduserswithreact.netlify.app/'>
                    <CardMedia
                        component="img"
                        height="140"
                        image={crudSS}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Crud Users App
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Web application where users can be managed through a CRUD made with react
                            <hr />
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant='outlined' size="small" color="primary" href='https://github.com/marcovm17/CRUD-Users'>
                        <GitHubIcon /> View code
                    </Button>
                </CardActions>
            </Card>

            <Card className='project5' sx={{ maxWidth: 345 }}>
                <CardActionArea href='https://pokedexmadewithreact.netlify.app/'>
                    <CardMedia
                        component="img"
                        height="140"
                        image={pokemonSS}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Pokemon App
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Pokedex search engine web application using pokemon API made with react
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant='outlined' size="small" color="primary" href='https://github.com/marcovm17/Pokedex_with-React'>
                        <GitHubIcon />View code
                    </Button>
                </CardActions>
            </Card>
            
            </ div>
        </section>
    );
}