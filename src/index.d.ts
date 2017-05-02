import { euglena_template } from "@euglena/template";
import { euglena } from "@euglena/core";
import Particle = euglena.being.Particle;
export declare class Organelle extends euglena_template.being.alive.organelle.TimeOrganelle {
    private time;
    constructor();
    private sapContent;
    protected bindActions(addAction: (particleName: string, action: (particle: Particle, callback: (particle: Particle) => void) => void) => void): void;
}
