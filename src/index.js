"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var euglena_template = require("@euglena/template");
var cessnalib_1 = require("cessnalib");
var constants = euglena_template.alive.constants;
var Organelle = (function (_super) {
    __extends(Organelle, _super);
    function Organelle() {
        var _this = _super.call(this) || this;
        _this.time = cessnalib_1.sys.type.StaticTools.Time.now();
        return _this;
    }
    Organelle.prototype.bindActions = function (addAction) {
        var _this = this;
        addAction(euglena_template.alive.constants.particles.TimeOrganelleSap, function (particle) {
            _this.sapContent = particle.data;
            var this_ = _this;
            setInterval(function () {
                //let newDate = new Date(this.time.date.year, this.time.date.month - 1, this.time.date.day,
                //    this.time.clock.hour, this.time.clock.minute, this.time.clock.second + 1);
                var newDate = new Date();
                if (newDate.getSeconds() != this_.time.clock.second) {
                    this_.time.clock.second = newDate.getSeconds();
                    //this_.nucleus.receiveParticle(new euglena_template.being.alive.particles.Second(this_.time.clock.second));
                    if (newDate.getMinutes() != this_.time.clock.minute) {
                        this_.time.clock.minute = newDate.getMinutes();
                        //this_.nucleus.receiveParticle(new euglena_template.being.alive.particles.Minute(this_.time.clock.minute));
                        if (newDate.getHours() != this_.time.clock.hour) {
                            this_.time.clock.hour = newDate.getHours();
                            //this_.nucleus.receiveParticle(new euglena_template.being.alive.particles.Hour(this_.time.clock.hour));
                            if (newDate.getDate() != this_.time.date.day) {
                                this_.time.date.day = newDate.getDate();
                                //this_.nucleus.receiveParticle(new euglena_template.being.alive.particles.Day(this_.time.date.day));
                                if (newDate.getMonth() + 1 != this_.time.date.month) {
                                    this_.time.date.month = newDate.getMonth() + 1;
                                    //this_.nucleus.receiveParticle(new euglena_template.being.alive.particles.Month(this_.time.date.month));
                                    if (newDate.getFullYear() != this_.time.date.year) {
                                        this_.time.date.year = newDate.getFullYear();
                                        //this_.nucleus.receiveParticle(new euglena_template.being.alive.particles.Year(this_.time.date.year));
                                    }
                                }
                            }
                        }
                    }
                }
                this_.send(new euglena_template.alive.particle.Time(_this.time, _this.sapContent.euglenaName), this_.name);
            }, 1000);
        });
        addAction(constants.particles.SetTime, function (particle) {
            _this.time = particle.data;
        });
    };
    return Organelle;
}(euglena_template.alive.organelle.TimeOrganelle));
exports.Organelle = Organelle;
//# sourceMappingURL=index.js.map