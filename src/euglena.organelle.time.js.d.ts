import { euglena_template } from "euglena.template";
import { euglena } from "euglena";
import Particle = euglena.being.Particle;
export declare class Organelle extends euglena_template.being.alive.organelles.TimeOrganelle {
    private time;
    constructor();
    receive(particle: Particle, response: euglena.being.interaction.Response): void;
}
